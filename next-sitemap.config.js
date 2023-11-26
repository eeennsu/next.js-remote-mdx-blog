module.exports = {
    siteUrl: process.env.SITE_URL || 'https://localhost:3000',                  // 사이트의 기본 url을 정의
    generateRobotsTxt: true,                                                    // robots.txt 파일을 생성할지 여부를 결정. 이 파일은 웹 크롤러에게 어떤 페이지를 방문해도 되는지에 대한 지침을 제공하는 텍스트 파일이다
    generateIndexSitemap: false,                                                // 인덱스용 사이트맵을 생성할지 여부를 결정한다. 일반적인 사이트가 매우 큰 경우, 여러 개의 사이트 맵 파일을 생성하는데 이를 인덱스 사이트 맵에 포함하여 검색 엔진에 제출할 수 있다. 
}