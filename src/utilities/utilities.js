export const isInvalidAction = (action) => (
    typeof action === 'undefined' ||
    action === null ||
    action === '' ||
    typeof action !== 'object'
)