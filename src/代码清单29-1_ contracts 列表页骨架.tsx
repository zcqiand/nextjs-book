"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HasPermission } from "@/features/auth/has-permission";

interface Contract {
  id: string;
  contractCode: string;
  clientUnit: string;
  projectName: string;
  projectLocation: string | null;
  status: "active" | "archived";
}

export default function ContractsPage() {
  const [list, setList] = useState<Contract[]>([]);
  const [keyword, setKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  ...
  useEffect(() => {
    void (async () => {
      const res = await fetch("/api/contracts");
      if (res.ok) setList(((await res.json()) as { items: Contract[] }).items);
    })();
  }, []);
  ...
}