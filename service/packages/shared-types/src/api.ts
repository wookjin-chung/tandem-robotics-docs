import type { paths } from "@tandem/api-contract/openapi";
import type { Result } from "./error";

// -------------------
// /judgment/logs (POST)
// -------------------
export type CreateJudgmentLogRequest =
  paths["/judgment/logs"]["post"]["requestBody"]["content"]["application/json"];

export type CreateJudgmentLogOk =
  paths["/judgment/logs"]["post"]["responses"]["200"]["content"]["application/json"];

export type CreateJudgmentLogData = CreateJudgmentLogOk["data"];

export type CreateJudgmentLogResult = Result<CreateJudgmentLogData>;

// -------------------
// /judgment/report (GET)
// -------------------
export type GetJudgmentReportQuery =
  paths["/judgment/report"]["get"]["parameters"]["query"];

export type GetJudgmentReportOk =
  paths["/judgment/report"]["get"]["responses"]["200"]["content"]["application/json"];

export type GetJudgmentReportData = GetJudgmentReportOk["data"];

export type GetJudgmentReportResult = Result<GetJudgmentReportData>;
