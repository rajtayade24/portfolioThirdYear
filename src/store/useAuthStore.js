import { create } from 'zustand'

const useAuthStore = create(
  (set, get) => ({
    isAuthenticated: false,
    user: null,
    userMainId: null,
    token: (() => {
      try {
        return localStorage.getItem("token");
      } catch (e) {
        return false;
      }
    })(),
    loading: true,

    setAuthenticated: (v) => set({ isAuthenticated: v }),
    setUser: (user) => set({ user }),
    setUserMainId: (id) => set({ userMainId: id }),
    setToken: (token) => {
      localStorage.setItem("token", token);
      set({ token, isAuthenticated: true });
    },

    darkMode: (() => {
      try {
        return localStorage.getItem("dark") === "true";
      } catch (e) {
        return false;
      }
      // }), // This does NOT run the function.
    })(), // calls / executes a function.

    toggleDarkMode: async () =>
      set((state) => {
        const newMode = !state.darkMode
        localStorage.setItem("dark", newMode)
        return { darkMode: newMode }
      }),

    // logout: () => {
    //   localStorage.removeItem("token")
    //   set({
    //     isAuthenticated: false,
    //     user: null,
    //     userMainId: null,
    //     token: null
    //   })
    // },
    // setLoading: (val) => set({ loading: val }),

    // postLogin: async (payload) => {
    //   const { token, user } = await loginRequest(payload);

    //   localStorage.setItem("token", token);

    //   set({
    //     token,
    //     user,
    //     isAuthenticated: true,
    //     loading: false,
    //   });
    //   return user;
    // },

    // postSignup: async (payload) => {
    //   const { token, user } = await signupRequest(payload);

    //   localStorage.setItem("token", token);

    //   set({
    //     token,
    //     user,
    //     isAuthenticated: true,
    //     loading: false,
    //   });
    //   return user;
    // },

    // getMe: async (payload) => {
    //   const { token, user } = await requestMe(payload);

    //   set({
    //     token,
    //     user,
    //     isAuthenticated: true,
    //     loading: false,
    //   });
    //   return user;
    // },
  })
)


export default useAuthStore;