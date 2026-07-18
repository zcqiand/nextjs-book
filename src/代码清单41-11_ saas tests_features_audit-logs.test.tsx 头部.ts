// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, vi } from "vitest";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { AuditLogsClient } from "@/app/(protected)/audit-logs/audit-logs-client";
import { fnTest } from "../fn";