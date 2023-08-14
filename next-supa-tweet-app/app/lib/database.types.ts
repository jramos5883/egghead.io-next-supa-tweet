export interface Database {
    public: {
      Tables: {
        tweets: {
          Row: {
            created_at: string
            id: string
            title: string
            user_id: string
            profiles: {
              avatar_url: string;
              user_name: string;
              id: string;
            }
          }
          Insert: {
            created_at?: string
            id?: string
            title: string
          }
          Update: {
            created_at?: string
            id?: string
            title?: string
          }
          Relationships: []
        }
      }
      Views: {
        [_ in never]: never
      }
      Functions: {
        [_ in never]: never
      }
      Enums: {
        [_ in never]: never
      }
      CompositeTypes: {
        [_ in never]: never
      }
    }
  }