export const BasicTypes = () => {
    const name: string = 'James';
    const age: number = 25;
    const isActive: boolean = true;

    const powers: string[] = ['Super fuerza', 'Volar', 'Velocidad'];

    powers.push('Invisibilidad');

    return (
        <>
            <h3>Tipos Basicos</h3>
            {name} {age} {isActive ? 'Activo' : 'Inactivo'}
            <br />
            {powers.join(', ')}
        </>
    );
};
