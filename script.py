import pandas as pd

# Nome do ficheiro CSV
csv_file = 'contratos2024.csv'

# Ler o ficheiro CSV
df = pd.read_csv(csv_file, delimiter=';')

# Converter o DataFrame para JSON
json_data = df.to_json(orient='records', force_ascii=False, lines=True)

# Salvar o JSON em um ficheiro
with open('contratos.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)

print("Conversão concluída com sucesso!")