import type { components } from "@tandem/api-contract/openapi";

export type ErrorCode = components["schemas"]["ErrorCode"];
export type ErrorEnvelope = components["schemas"]["ErrorEnvelope"];

// OkEnvelope도 OpenAPI 기준으로 동기화 가능
export type OkEnvelopeBase = components["schemas"]["OkEnvelope"];

/**
 * Result<T> = Ok<T> | ErrorEnvelope
 * 규칙: Ok<T>는 ok:true + requestId + data:T 를 강제
 */
export type Ok<T> = {
  ok: true;
  requestId: string;
  data: T;
};

export type Result<T> = Ok<T> | ErrorEnvelope;
