try {
    const myError = new Error('This is a custom error message')
    throw myError;
} catch(err) {
    alert(err)
}