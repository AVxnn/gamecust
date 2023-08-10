
const isRoleHandler = (user: any, member: any) => {
    if (user === member) {
        console.log('Доступ разрешен');
        
        return true;
    }
    return false;
}

export default isRoleHandler