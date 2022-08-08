import { VerifiableCredential, VerifiablePresentation } from "@veramo/core";

export interface GetVCs {
  method: "getVCs";
  params: {
    querry?: VCQuerry;
  };
}

export interface SaveVC {
  method: "saveVC";
  params: {
    verifiableCredential: VerifiableCredential;
  };
}

export interface GetVP {
  method: "getVP";
  params: {
    vc_id: string;
    domain?: string;
    challenge?: string;
  };
}

export interface ChangeInfuraToken {
  method: "changeInfuraToken";
  params: {
    infuraToken: string;
  };
}

export interface TogglePopups {
  method: "togglePopups";
}

export type MetaMaskSSISnapRPCRequest =
  | GetVCs
  | SaveVC
  | GetVP
  | ChangeInfuraToken
  | TogglePopups;

type Method = MetaMaskSSISnapRPCRequest["method"];

export interface WalletEnableRequest {
  method: "wallet_enable";
  params: object[];
}

export interface GetSnapsRequest {
  method: "wallet_getSnaps";
}

export interface SnapRpcMethodRequest {
  method: string;
  params: [MetaMaskSSISnapRPCRequest];
}

export type MetamaskRpcRequest =
  | WalletEnableRequest
  | GetSnapsRequest
  | SnapRpcMethodRequest;

export type Callback<T> = (arg: T) => void;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SSISnapEventApi {}

export interface SSISnapApi {
  getVCs(querry?: VCQuerry): Promise<VerifiableCredential[]>;
  saveVC(verifiableCredential: VerifiableCredential): Promise<boolean>;
  getVP(
    vc_id: string,
    domain?: string,
    challenge?: string
  ): Promise<VerifiablePresentation>;
  changeInfuraToken(infuraToken: string): Promise<boolean>;
  togglePopups(): Promise<boolean>;
}

export interface VCQuerry {
  [key: string]: string;
}
