              {/* 租户切换（M00.F02.I01） */}
              <TenantSwitcher />
              <Button
                variant="outline"
                size="sm"
                data-fn="M01.F05.I05"
                data-testid="logout-button"
                onClick={() => {
                  clearToken();
                  window.location.href = "/login";
                }}
              >
                <LogOut className="h-4 w-4 mr-1" />
                登出
              </Button>