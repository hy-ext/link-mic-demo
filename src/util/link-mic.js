import { createLinkMicManager, LogEventEmitter } from "@hyext/link-mic";
import {
  useContext,
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const manager = createLinkMicManager(hyExt, {
  extUuid: "ridpnrfr", // 填写属于自己小程序的uuid
  debugManager: true,
  debugSDK: true,
});
const managerContext = createContext({ linkMickManager: manager });

export function useLinkMicManager() {
  const ctx = useContext(managerContext);
  return ctx.linkMickManager;
}

export function useLogs() {
  const [logs, setLogs] = useState([]);

  const updateLogs = useCallback((msg) => {
    setLogs(
      [
        {
          time: new Date(),
          msg,
        },
        ...logs
      ]
    );
  }, [logs])

  useEffect(() => {
    function handleLog(msg) {
      updateLogs(msg)
    }
    LogEventEmitter.on("log", handleLog);
    return () => {
      LogEventEmitter.off("log", handleLog);
    };
  }, [updateLogs]);

  return [logs, updateLogs];
}

