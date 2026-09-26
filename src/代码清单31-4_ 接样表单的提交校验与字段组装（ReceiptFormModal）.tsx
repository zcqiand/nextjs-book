  const [errors, setErrors] = useState<{
    contractId?: string;
    categoryCode?: string;
    commissionCode?: string;
  }>({});

  const contract = contracts.find((c) => c.id === contractId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!contractId) nextErrors.contractId = "请选择合同";
    if (!categoryCode) nextErrors.categoryCode = "请选择报告名称";
    if (!commissionCode.trim()) nextErrors.commissionCode = "委托书编号必填";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    onSubmit({
      id: initialValues?.id,
      contractId,
      categoryCode,
      commissionCode: commissionCode.trim(),
      commissionDate,
      projectName: contract?.projectName ?? "",
      clientUnit: contract?.clientUnit ?? "",
      // …（合同驱动四单位直传 contract?.x；其余输入项按 trim || undefined 组装，略）
      // || 而非 ??：displayName 空串（saas 无显示名，aspnetcore SSO 落地如此）时
      // 必须回退 username——?? 兜不住空串，会把 "" 写进收样单（2026-09-23）
      receivedBy: currentUser?.displayName || currentUser?.username || "",
      sampleSource,
      testCategory,
      judgmentBasis: judgmentBasis.length > 0 ? judgmentBasis : undefined,
      testingBasis: testingBasis.length > 0 ? testingBasis : undefined,
      testParameters: testParameters.length > 0 ? testParameters : undefined,
      remark: remark.trim() || undefined,
    });
  };