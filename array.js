function mayorArray (array){
    if (array.length == 0){
        return null;
    }
    if (array.length == 1){
        return null;
    }
    let mayor = array [0];
    for(let i = 1;  i < array.length; i++){
        if(array[i] > mayor){
            mayor = array [i];
        }
    }
    let i = 0;
    while (i < array.length){
        console.log(array[i]);
        i++;
    }
    let impar =0;
    let j =0;
    do{
        if (array[j]%2 !==0){
            impar++;
        }

        j++;
    } while (j < array.length);
    console.log ("La cantdad de numeros impares del arreglo son: " + impar)

    return mayor
}
mayorArray (1,2.3,4,5,6,7,8,9,10);