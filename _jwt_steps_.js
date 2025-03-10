/* 
install jsonwebtoken
jwt.sign(playload, secret, {expiresIn:})
token client
*/
/**
 * how to store token in client side
 * 1. memory --> ok type/ not recommended
 * 2. local storage --> ok type(XSS)
 * 3. cookies --> http only 
 */

/**
 * 1. set cookies with http only. for development secure: false,
 * 2. cors
 * 3. client side axios setting
 */