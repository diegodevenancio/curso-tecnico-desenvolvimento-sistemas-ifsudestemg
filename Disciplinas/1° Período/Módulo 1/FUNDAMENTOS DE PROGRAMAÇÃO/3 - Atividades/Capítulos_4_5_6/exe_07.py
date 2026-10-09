# Soma dos elementos

notas = [7.5, 8.0, 6.5, 9.0]
soma = 0

for n in notas:
  soma += n

print(f"Soma: {soma}")
print(f"A média das notas é: {soma / len(notas):.2f}")