import React, { useState, useEffect, useCallback } from "react";
import { UI } from "@hyext/hy-ui";

import "./style.hycss";

import SubmitButton from "../SubmitButton";
import LogPanel from "../LogPanel";
import { useLinkMicManager, useLogs } from "../../util/link-mic";

const { ScrollView, View, Input, Switch, Form } = UI;

function demoHOC(Actions) {
  return function DemoWrapper() {
    const manager = useLinkMicManager();
    const eventIdPool = manager.eventIdPool;
    const [logs, setLogs] = useLogs();

    const logEventData = useCallback((data) => {
      setLogs("事件数据: " + JSON.stringify(data));
    }, []);

    useEffect(() => {
      manager.on(eventIdPool.closeRoom, logEventData);
      manager.on(eventIdPool.createRoom, logEventData);
      manager.on(eventIdPool.joinRoom, logEventData);
      manager.on(eventIdPool.leaveRoom, logEventData);
    }, []);

    return (
      <ScrollView className="container">
        <Actions></Actions>
        <LogPanel logs={logs} />
      </ScrollView>
    );
  };
}

function ViewerActions() {
  const manager = useLinkMicManager();

  return (
    <Form>
      <SubmitButton onPress={() => manager.joinCurrAnchorRoom()}>
        加入当前主播创建的连麦房间
      </SubmitButton>
      <SubmitButton onPress={() => manager.leaveRoom()}>
        离开连麦房间
      </SubmitButton>
      <SubmitButton onPress={() => manager.queryRoomInfo()}>
        查询成员信息
      </SubmitButton>
      <SubmitButton onPress={() => manager.mutePlayOnViewer()}>
        关闭视频流声音
      </SubmitButton>
      <SubmitButton onPress={() => manager.unmutePlayOnViewer()}>
        开启视频流声音
      </SubmitButton>
    </Form>
  );
}

function StreamerActions() {
  const manager = useLinkMicManager();

  return (
    <Form>
      <SubmitButton onPress={() => manager.createRoom()}>
        创建连麦房间
      </SubmitButton>
      <SubmitButton onPress={() => manager.leaveRoom()}>
        离开连麦房间
      </SubmitButton>
    </Form>
  );
}

export const ViewerDemo = demoHOC(ViewerActions);
export const StreamerDemo = demoHOC(StreamerActions);
