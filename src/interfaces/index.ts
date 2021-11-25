import { AxiosResponse } from "axios";
import { Consulta, Clinica, Cliente, Horario, User } from "./models";

export * from "./models"

export interface APIResponseSuccess {
  consulta: Consulta;
  clinica: Clinica;
  cliente: Cliente;
  horario: Horario;
  consultas: [Consulta];
  clientes: [Cliente];
  horarios: [Horario];
  funcionario: User;
  funcionarios: [User];

}

export interface APIResponseFail {
  payload: { [param: string]: string };
  detail: { [param: string]: string };
}

export type APIResponse = AxiosResponse<{
  status: "success" | "fail" | "error";
  message?: string;
  data: APIResponseSuccess | APIResponseFail | null;
  path?: string;
}>