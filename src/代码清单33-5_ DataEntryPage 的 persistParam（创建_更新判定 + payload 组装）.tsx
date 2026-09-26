  // 落库单个检测参数（依据 + 技术要求 + 结果 + 单项评定）。无既有记录且无任何输入时跳过，避免空记录。
  const persistParam = async (sid: string, paramCode: string) => {
    if (!selectedSample || selectedSample.id !== sid) return;
    const k = `${sid}#${paramCode}`;
    const existing = recordByParam.get(paramCode);
    const input = inputs[k] ?? existing?.result ?? "";
    const v = verdicts[k];
    const basisSel = bases[k];
    const reqSel = reqCodes[k];
    if (!existing && input === "" && !v && !basisSel && !reqSel) return;
    // 契约 CreateTestRecordRequest.requirement 必填；后端对缺失值 coerce 为 ""，
    // 这里显式给 ""（或既有记录值）保持线上行为。
    const payload = {
      sampleId: sid,
      parameterCode: paramCode,
      result: input,
      requirement: existing?.requirement ?? "",
      ...(v ? { verdict: v } : {}),
      ...(basisSel ? { standardCode: basisSel } : {}),
      ...(reqSel
        ? {
            requirementCode: reqSel,
            requirement: (() => {
              const found = reqByCode.get(reqSel);
              return found ? requirementLabel(found) : (existing?.requirement ?? "");
            })(),
          }
        : {}),
    };
    let saved: TestRecord;
    if (existing) {
      saved = await testRecordsUpdateTestRecord(existing.id, payload);
    } else {
      saved = await testRecordsCreateTestRecord(payload);
    }
    // 服务端权威记录回填本地缓存，并清掉该 (sampleId, paramCode) 的 dirty 键
    //（setRecords 替换与 setVerdicts/setBases/setReqCodes 同构清键，略）
  };