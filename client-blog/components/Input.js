export default function Input({ value, onChange }) {
    return (
        <>
            <input
                type="text"
                placeholder={value}
                value={value}
                onChange={onChange}
            />
        </>
    )
}