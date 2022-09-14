export function CreateId(length: number) {
    let characters = "1234567890";
    let result = '';

    for (let index = 0; index < length; index++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}