/** 任务取消——M03.F02.I03：清空 assigneeName/assigneeId/plannedTestDate，回到未分配态 */
function CancelButton({
  receipt,
  onCancel,
  refresh,
}: {
  receipt: SampleReceipt;
  onCancel: (r: SampleReceipt, refresh: () => Promise<void>) => Promise<void>;
  refresh: () => Promise<void>;
}) {
  return (
    <button
      // @entry M03.F02.I03 任务取消（已安排的接样单「取消任务」按钮，清空 assignee + plannedTestDate）
      onClick={() => onCancel(receipt, refresh)}
      data-fn="M03.F02.I03"
      className="px-2 py-1 text-red-600 hover:underline"
    >
      取消任务
    </button>
  );
}