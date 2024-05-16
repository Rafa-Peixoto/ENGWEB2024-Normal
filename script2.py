import json

def convert_to_valid_json(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Convert each line to a JSON object, convert precoContratual to number and add to a list
    json_data = []
    for line in lines:
        data = json.loads(line)
        # Convert precoContratual to number
        if 'precoContratual' in data:
            try:
                data['precoContratual'] = float(data['precoContratual'].replace(",", ""))
            except ValueError:
                data['precoContratual'] = None  # Handle conversion error if needed
        json_data.append(data)

    # Write the list of JSON objects to the output file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    input_file = 'contratos1.json'  # Nome do arquivo original
    output_file = 'contratos.json'  # Nome do novo arquivo JSON

    convert_to_valid_json(input_file, output_file)
    print(f"Arquivo formatado salvo como {output_file}")
