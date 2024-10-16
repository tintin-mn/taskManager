interface ITagProps {
    tagName: string;
    className: string;
}


const TagFormat: React.FC<ITagProps> = ({tagName, className}) => {

    return (
        <span
            className={`w-fit flex flex-col items-center justify-center rounded-[4px] text-base text-white px-2 py-1 font-extrabold text-xs ${className}`}>
            {tagName}
        </span>
    );
}
// interface TagProps {
//     status: string;
// }
//
// const TagFormat: React.FC<TagProps> = ({status}) => {
//     let bgColor = '';
//
//     switch (status) {
//         case 'pending':
//             bgColor = 'bg-pink-primary';
//             break;
//         case 'in progress':
//             bgColor = 'bg-orange-primary';
//             break;
//         case 'done':
//             bgColor = 'bg-green-primary';
//             break;
//     }
//
//     return (
//         <span
//             className={`text-white py-1 px-3 rounded ${bgColor}`}>
//             {status}
//         </span>
//     );
// };


export default TagFormat;