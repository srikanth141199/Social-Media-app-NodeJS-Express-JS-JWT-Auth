import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next)=>{
    // 1. Read the token.
    const token = req.session.JWT_token;

    // 2. if no token, return the error.
    if(!token){
        return res.redirect('/');
        //return res.status(401).send('Unauthorized');
    }
    // 3. check if token is valid.
    try{
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
        );
        req.body.userId = payload.userId;
        req.session.userId = payload.userId;
        // console.log("req.body.userId : "+req.body.userId);
        // console.log("req.session.userId : "+req.session.userId);
    } catch(err){
        // 4. return error.
        console.log(err);
        return res.redirect('/home');
        //return res.status(401).send('Unauthorized');
    }

    // 5. call next middleware.
    next();
};

export default jwtAuth;