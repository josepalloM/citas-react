
const Paciente = () => {
    return (
        <div>
            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">Hook</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">José</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">correo@correo.com</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-normal normal-case">17 de octubre de 2022</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                    <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet architecto blanditiis consectetur delectus dolore, eius enim, explicabo iusto molestias nulla perferendis quam quidem quisquam reprehenderit tempora tempore temporibus vero.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Paciente;