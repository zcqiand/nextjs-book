                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-2 text-red-600 hover:text-red-700"
                      data-fn="M02.F01.I05"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`确认删除合同 ${c.contractCode}？`)) {
                          remove.mutate(c.id, {
                            onSuccess: () => {
                              toast.success("合同已删除");
                            },
                            onError: (err) => toast.error(err.message),
                          });
                        }
                      }}
                    >
                      删除
                    </Button>