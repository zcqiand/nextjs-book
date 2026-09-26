  // 参数 → 界面组件派发表：未绑定的参数不在此表，由 registry fallback 到 DefaultParamCard。
  const interfaceByParam = useMemo(
    () => resolveInterfaceByParam(interfaces, links, receipt.categoryCode),
    [interfaces, links, receipt.categoryCode],
  );

  // ...

  {parameters.map((p) => {
    const rec = recordByParam.get(p.code);
    const ifce = interfaceByParam[p.code];
    const Model = resolveParamInterfaceModel(ifce?.componentPath);
    const basisOptions = stdParams
      .filter((sp) => sp.inspectionParameterCode === p.code)
      .map((sp) => standardByCode.get(sp.inspectionStandardCode))
      .filter((s): s is InspectionStandard => !!s);
    const reqOptions = techReqs.filter(
      (r) => r.inspectionParameterCode === p.code,
    );
    return (
      <div key={p.code}>
        <Model
          parameter={p}
          record={rec}
          sampleId={selectedSample.id}
          standards={basisOptions}
          stdParams={stdParams}
          techReqs={reqOptions}
          config={ifce?.config}
          calcRule={calcRuleByParam.get(p.code)}
          crossRecord={RATIO_PARAMS.has(p.code) ? crossRecord : undefined}
          onChange={(patch) =>
            applyPatch(selectedSample.id, p.code, patch)
          }
        />
      </div>
    );
  })}