  const cancelAssignment = async (r: SampleReceipt, refresh: () => Promise<void>) => {
    // 任务字段走契约专用端点 PUT /api/receipts/{id}/task
    // （UpdateSampleReceiptRequest 不含 assignee* 字段）
    await receiptsAssignTask(r.id, {
      assigneeName: "",
    });
    await refresh();
  };

  const handleSave = async () => {
    if (!target) return;
    setSaving(true);
    try {
      await receiptsAssignTask(target.id, {
        assigneeName: assigneeName.trim(),
        assigneeId: assigneeName.trim() ? `u-${assigneeName.trim()}` : undefined,
        plannedTestDate,
      });
      setTarget(null);
      await refreshAfterSave?.();
    } finally {
      setSaving(false);
    }
  };