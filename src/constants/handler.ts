import { RemarkHandler } from "../process/remarkHandler";
import { DataAvailabilityHandler } from "../process/dataAvailabilityHandler";
import { IHandler } from "../interfaces/interfaces";

export const HandlerMap: Record<string, IHandler> = {
    "System.remark": new RemarkHandler(),
    "System.remark_with_event": new RemarkHandler(),
    "DataAvailability.submit_data": new DataAvailabilityHandler()
};

export const CallArr = [
    "System.remark",
    "System.remark_with_event",
    "DataAvailability.submit_data"
]