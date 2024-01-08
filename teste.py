def par (n):
    if n % 2 == 0:
        return 'Par'
    else:
        return 'Impar'
    

while True:
    n = int(input('Digite um valor: '))
    par(n)
    p = str(input('Deseja continuar: [S/N] '))
    while 