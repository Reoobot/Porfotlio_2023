export default function Card({children}) {
    return(
        <div className="bg-white shadow-md shadow-gray-500 rounded-md p-1 mb-5">
            {children}
        </div>
    );
}