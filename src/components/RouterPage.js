import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import Login from './Login'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'
import RegistrationList from './RegistrationList'
import ArticleList from './ArticleList'
import News from './News'
import UserArticle from './UserArticle'
import MyNews from './MyNews'

const RouterPage = () => {
  return (
    
    <Routes>

        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Login />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/registrationlist" element={<RegistrationList />} />
          <Route path="/articlelist" element={<ArticleList />} />
          <Route path="/news" element={<News />} />
          <Route path="/mynews" element={<MyNews />} />
          <Route path="/userarticle" element={<UserArticle />} />
          </Route>
                
        </Routes>
  )
}

export default RouterPage