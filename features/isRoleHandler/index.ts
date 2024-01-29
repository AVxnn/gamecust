
const isRoleHandler = (user: any, member: any) => {
    if (user === member) {
        return true;
    }
    return false;
}

export default isRoleHandler