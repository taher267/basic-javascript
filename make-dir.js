const mkdir = () => {

    const UPLOADS_FOLDER = `public/uploads/avatars/`;
    const upArr = UPLOADS_FOLDER.split('/').filter(v => v.length > 0);
    let path = "";
    // console.log(upArr);
    for (i = 0; i < upArr.length; i++) {
        path = path + `${upArr[i]}/`;
        if (!fs.existsSync(path)) fs.mkdirSync(path);
        else {
            console.log("Directory already exist");
        }

    }

}
mkdir()
