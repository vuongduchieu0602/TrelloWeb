import Box from '@mui/material/Box'

import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderBottom: '1px solid white',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx = {MENU_STYLES}
          icon={<DashboardIcon />}
          label="Dashboard"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button 
          variant="outlined" 
          startIcon={<PersonAddIcon/>}
          sx = {{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }} 
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx = {{
            gap: 2,
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title="Vuong Duc Hieu">
            <Avatar alt="Vuong Duc Hieu" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/411676247_756188009659723_5438507185616556078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ips5jx1MwqAAX9nNSlX&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAadAAMOk2_U8dPf-VX9JcQKcQHsTkRiL4dTHXEqNm1CQ&oe=6588629B" />
          </Tooltip>
          <Tooltip title="Quach Ngoc Anh">
            <Avatar alt="Quach Ngoc Anh" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/405302707_1866540293760776_6283348808643649546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=muk_Y3BbQoMAX9ifho1&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCp1X4Nij1fHu7GjcNc5GiH4wIxIvZUIZY2RmZewbgg5g&oe=658C30F1" />
          </Tooltip>
          <Tooltip title="Tran Thao Ly">
            <Avatar alt="Tran Thao Ly" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/279225030_1683837798630120_4222968346508493271_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=bYNjrWlL8-YAX92Ojl8&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAMj6xyMMO5owx7vRM4QcMxtNVAdzKKt226a-W5Xs4omw&oe=658C26D9" />
          </Tooltip>
          <Tooltip title="Pham Thi Kieu">
            <Avatar alt="Pham Thi Kieu" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/337879311_1036132187350054_6189647176159156818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Uy7JpfGXSmUAX8Deq8i&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAYecEnWlCqfg4S928dyelH3Tp_Ij5VS7U2fk2aKKEsIQ&oe=658BC150" />
          </Tooltip>
          <Tooltip title="Hoang Thao Linh">
            <Avatar alt="Hoang Thao Linh" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/348247300_742809334300490_3710212716643088140_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=xiOOb5e-9_cAX_xrEbC&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBO-Lz1YIyk5T6XW2dg5yAc3i4QGzEFjYg90_sD3_FfXg&oe=658C1EA4" />
          </Tooltip>
          <Tooltip title="Tran Thao Nguyen">
            <Avatar alt="Tran Thao Nguyen" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/292699460_1179157166261990_4653792318499350722_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_QvN1roG8lUAX8EkqNJ&_nc_oc=AQljA6hwg58JmbTNu8os2WzBEoLvhBN10lpOJEaIK5XsZpncALE4VGX6npjBjk72BNKfrULQayDz6RgwU49gQcmV&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBg9-jqXXdRaJKK0VfXOhMbGKc0cYXwi2yNS_ZYBPVExw&oe=658CD6DD" />
          </Tooltip>
          <Tooltip title="Vuong Duc Hieu">
            <Avatar alt="Vuong Duc Hieu" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/411676247_756188009659723_5438507185616556078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ips5jx1MwqAAX9nNSlX&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAadAAMOk2_U8dPf-VX9JcQKcQHsTkRiL4dTHXEqNm1CQ&oe=6588629B" />
          </Tooltip>
          <Tooltip title="Quach Ngoc Anh">
            <Avatar alt="Quach Ngoc Anh" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/405302707_1866540293760776_6283348808643649546_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=muk_Y3BbQoMAX9ifho1&_nc_ht=scontent.fhan2-3.fna&oh=00_AfCp1X4Nij1fHu7GjcNc5GiH4wIxIvZUIZY2RmZewbgg5g&oe=658C30F1" />
          </Tooltip>
          <Tooltip title="Tran Thao Ly">
            <Avatar alt="Tran Thao Ly" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/279225030_1683837798630120_4222968346508493271_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=bYNjrWlL8-YAX92Ojl8&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAMj6xyMMO5owx7vRM4QcMxtNVAdzKKt226a-W5Xs4omw&oe=658C26D9" />
          </Tooltip>
          <Tooltip title="Pham Thi Kieu">
            <Avatar alt="Pham Thi Kieu" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/337879311_1036132187350054_6189647176159156818_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Uy7JpfGXSmUAX8Deq8i&_nc_ht=scontent.fhan2-3.fna&oh=00_AfAYecEnWlCqfg4S928dyelH3Tp_Ij5VS7U2fk2aKKEsIQ&oe=658BC150" />
          </Tooltip>
          <Tooltip title="Hoang Thao Linh">
            <Avatar alt="Hoang Thao Linh" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/348247300_742809334300490_3710212716643088140_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=xiOOb5e-9_cAX_xrEbC&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBO-Lz1YIyk5T6XW2dg5yAc3i4QGzEFjYg90_sD3_FfXg&oe=658C1EA4" />
          </Tooltip>
          <Tooltip title="Tran Thao Nguyen">
            <Avatar alt="Tran Thao Nguyen" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/292699460_1179157166261990_4653792318499350722_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_QvN1roG8lUAX8EkqNJ&_nc_oc=AQljA6hwg58JmbTNu8os2WzBEoLvhBN10lpOJEaIK5XsZpncALE4VGX6npjBjk72BNKfrULQayDz6RgwU49gQcmV&_nc_ht=scontent.fhan2-3.fna&oh=00_AfBg9-jqXXdRaJKK0VfXOhMbGKc0cYXwi2yNS_ZYBPVExw&oe=658CD6DD" />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar