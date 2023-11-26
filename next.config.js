/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/gitdagray/test-blogposts/main/images/**'
            }
        ]
    }
}

module.exports = nextConfig

// Next.js 에서 이미지를 처리하기 위한 속성이다.
// remotePatterns 배열은 이미지를 가져오는 외부 소스를 지정하는데 사용된다. 이 경로패턴으로부터 이미지를 가져와 Next.js에서 사용할 수 있도록 구성한다