// 커밋 메시지 규칙 (노션 "Git · PR 컨벤션"과 동일)
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 우리 팀이 쓰는 타입 6개만 허용
    'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'style', 'chore', 'docs']],
    // 한글 설명을 쓰므로 대소문자 규칙은 끔
    'subject-case': [0],
  },
}
