import Word from '@/models/Word'
import Gym from '@/models/Gym'
import Crag from '@/models/Crag'
import CragRoute from '@/models/CragRoute'
import CragSector from '@/models/CragSector'
import GuideBookPaper from '@/models/GuideBookPaper'

export const RecordToObjectHelpers = {
  methods: {
    recordToObject: function (type, data) {
      if (type === 'Word') {
        return new Word(data)
      } else if (type === 'Gym') {
        return new Gym(data)
      } else if (type === 'Crag') {
        return new Crag(data)
      } else if (type === 'CragRoute') {
        return new CragRoute(data)
      } else if (type === 'CragSector') {
        return new CragSector(data)
      } else if (type === 'GuideBookPaper') {
        return new GuideBookPaper(data)
      }
    }
  }
}
