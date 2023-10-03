# Read the JSON report
$auditData = Get-Content -Raw -Path "audit-report.json" | ConvertFrom-Json

# Extract vulnerability names
$vulnerabilityNames = $auditData.metadata.vulnerabilities | ForEach-Object { $_.title }

# Convert the array of names to a JSON object
$vulnerabilityNames | ConvertTo-Json | Out-File -Encoding utf8 -FilePath "vulnerabilities.json"
