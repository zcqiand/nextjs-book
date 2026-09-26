    const activeClients = await db
      .select({ id: oauthClient.id, clientId: oauthClient.clientId })
      .from(oauthClient)
      .where(eq(oauthClient.status, 1));