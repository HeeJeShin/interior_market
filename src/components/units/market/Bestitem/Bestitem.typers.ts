import { ReactEventHandler } from "react";
import { IBoard } from "../../../../commons/types/generated/types";

export interface IBestItemUIProps {
  data: IBoard;
  onError: ReactEventHandler<HTMLImageElement> | undefined;
  onClickMoveToMarketDetail: any;
}
