// http://localhost:3000/api/revalidate?path=/&secret=442c071cafb0a035bac120974d80440a

// import type { NextApiRequest, NextApiResponse } from 'next';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
//     if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
//         return res.status(401).json({ "msg": "Invalid Token!" });
//     }

//     const path = req.query.path as string;

//     await res.revalidate(path);

//     return res.status(200).json({ "revalidated": true });
// }

// export default handler;


// 401 - 인증되지 않은 상태
// 403 - 인증은 됐지만 최종적으로 권한이 없을 때

// revalidate 폴더에 잇는 route.ts 파일이 최신 버전.