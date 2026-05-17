'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { createClient } from '@/utils/supabase/client'

const AuthContext = createContext<any>(null)

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const [loggedIn, setLoggedIn] = useState(false)

  const [user, setUser] = useState<any>(null)

  const [profile, setProfile] = useState<any>(null)

  const [loading, setLoading] = useState(true)

  // تحميل بيانات المستخدم
  const loadUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setUser(null)
      setProfile(null)
      setLoggedIn(false)
      setLoading(false)
      return
    }

    setUser(user)
    setLoggedIn(true)

    // هات profile
    const { data: profileData, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (!error) {
      setProfile(profileData)
    }

    setLoading(false)
  }

  useEffect(() => {
    loadUser()

    // متابعة auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,

        user,
        setUser,

        profile,
        setProfile,

        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}