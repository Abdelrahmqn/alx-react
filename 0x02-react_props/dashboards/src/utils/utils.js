export const getFullYear = () => { 
    let current_year = new Date().getFullYear();
	return current_year;
}

console.log(getFullYear)

export const getFooterCopy = (isIndex) => {
    if (isIndex) return 'ALX'
    return 'ALX main dashboard'
}


export function getLatestNotification () {
    // return (
    //     <div className="getLatestNotification">
    //         <strong>Urgent requirement</strong> - complete by EOD
    //     </div>
    // )
    return ('<strong>Urgent requirement</strong> - complete by EOD')

}
