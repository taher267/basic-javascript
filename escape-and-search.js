const escape = function (str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

module.exports = escape;

exports.searchUser = async (req, res, next) => {
    const { user } = req.body;
    const searchQuery = user.replace("+88", "");

    const name_search_regex = new RegExp(escape(searchQuery), "i");
    const mobile_search_regex = new RegExp("^" + escape("+88" + searchQuery));
    const email_search_regex = new RegExp("^" + escape(searchQuery) + "$", "i");
    try {
        if (searchQuery !== "") {
            const getUsers = await User.find({
                $or: [{
                    name: name_search_regex
                },
                { mobile: mobile_search_regex },
                { email: email_search_regex }
                ]

            });
            if (getUsers.length > 0) {
                const users = getUsers.filter(user => {
                    if (user._id.toString() !== req.user.ID) {
                        return {
                            _id: user._id,
                            name: user.name,
                            email: user.email,
                            mobile: user.mobile,
                            avatar: user.avatar,
                            createdAt: user.createdAt,
                            updatedAt: user.updatedAt,
                        }
                    }

                });
                res.json(users);
            } else {
                res.status(404).json({
                    errors: {
                        common: {
                            msg: "Don't get any user!"
                        }
                    }
                });
            }
        }
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: err.message
                }
            }
        });
    }


}
