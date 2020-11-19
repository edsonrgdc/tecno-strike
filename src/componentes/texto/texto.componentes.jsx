export function Texto ({ name, type,  onChange, placeholder }) {
    return <div>
        <input onChange={onChange} type={type} placeholder={placeholder} name={name} id={name} />
    </div>
}

export default Texto