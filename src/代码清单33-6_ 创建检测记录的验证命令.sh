curl -i -X POST http://localhost:3000/api/test-records \
  -H "Authorization: Bearer <你的token>" \
  -H "Content-Type: application/json" \
  -d '{"sampleId":"SP-xxxx","parameterCode":"IP-XXXX","result":"{\"rows\":[{\"point\":\"P1\",\"value\":1.2}]}","requirement":"≥ 95 %"}'