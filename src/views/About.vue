<template>
  <div class="page">
    <div class="about">
      <h1 class="title">ABOUT</h1>
      <div class="contents">
        <div class="me">
          <h2>ME</h2>
          <div class="list">
            <p v-for="(item, index) in me" :key="index">
              {{ item.item }} : {{ item.value }} 
            </p>
            <p>Github : <a :href="github" target="_blank">{{ github }}</a></p>
          </div>
        </div>
        <div class="history">
          <h2>HISTORY</h2>
          <ul>
            <li v-for="(experience, index) in workExperience" :key="index">
            {{ experience.period }} {{ experience.position }} {{ experience.company }}
            </li>
          </ul>
        </div>
        <div class="skills">
          <h2>SKILLS</h2>
          <div class="list">
            <h4 class="skill-subtitle">LANGUAGE/TOOL/etc...</h4>
            <div class="skill-list">
              <span v-for="(skill, index) in skills" :key="index" class="skill">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="interns">
          <h2>INTERNS</h2>
          <div class="intern-container">
            <div v-for="(intern, index) in interns" :key="index" class="project-box">
              <a class="project-position" :href="intern.companyLink" target="_blank">{{ intern.company }}</a>
              <span class="project-position"> ({{ intern.period }})</span>
              <br>
              <a class="project-name" :href="intern.article" target="_blank">{{ intern.name }}</a>
            </div>
          </div>
        </div>
        <div class="others">
          <h2>OTHERS</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  data() {
    return {
      me: [
        { item: 'Name', value: '小久保　尚' },
        { item: 'Age', value: '19' },
        { item: 'University', value: '公立はこだて未来大学' },
        { item: 'E-mail', value: 'b1022096@fun.ac.jp' },
      ],
      github: 'https://github.com/ona07',
      workExperience: [
        { period: '2004.01.29', position: '', company: '誕生' },
        { period: '', position: '', company: '' }
      ],
      skills: [
        'Japanese', 'FastAPI', 'Python', 'HTML', 'Javascript', 'CSS', 'Vue.js', 'Processing', 'C', 'R', 'Blender',
        'analysis (mathematical)', 'Practical English Proficiency Test Level 4',
      ],
      projects: [
        { frame: '高度ICT演習', team: 'fun-i-con', position: 'backend', link: 'https://www.fun.ac.jp/advanced-ict' },
        { frame: 'いさりびwith', team: '商品開発チーム', position: 'subleader & web developer' },
      ],
      interns: [
        {
          company: 'CosstyHD (株)ECOTEC',
          name: '建設会社でDXインターンシップ',
          period: '2023/03/13~2023/03/16',
          article: 'https://note.com/crosstyhd_dx/n/n304c759e42e8'
        },
        {
          company: 'CosstyHD (株)ECOTEC',
          name: '建設会社でDXインターンシップ',
          period: '2023/03/13~2023/03/16',
          article: 'https://note.com/crosstyhd_dx/n/n304c759e42e8'
        },
      ],
    };
  },
};
</script>

<style>
.page {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
}
.about {
  width: 50vw;
  height: 100vh;
  margin-top: 0px;
  color: aliceblue;
}
.title {
  font-weight: lighter;
  margin-top: 50px;
  margin-bottom: 0px;
}
h2 {
  margin-top: 120px;
  font-weight: lighter;
}
.list {
  margin-left: 30px;
  font-weight: lighter;
}
.skill-subtitle {
  margin-bottom: 6px;
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
}
.skill {
  width: fit-content;
  border: 1px solid white;
  padding: 5px 10px;
  margin: 6px 6px 6px 0px;
  font-size: 12px;
}
.project-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.project-box {
  flex-basis: 25%;
  padding: 10px 0;
}
.project-name {
  font-size: 18px;
  color: white;
}
.project-position {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
