import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Instagram, Facebook, Link as LinkIcon, 
  Briefcase, BarChart2, BookOpen, LayoutGrid, Globe, Users, X, ExternalLink
} from 'lucide-react';
import { profiles, domains } from '../data/profiles';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  facebook: <Facebook className="w-5 h-5" />,
  link: <LinkIcon className="w-5 h-5" />,
  briefcase: <Briefcase className="w-5 h-5" />,
  'bar-chart-2': <BarChart2 className="w-5 h-5" />,
  'book-open': <BookOpen className="w-5 h-5" />,
  'layout-grid': <LayoutGrid className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
};

export default function Profiles() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [previewProfile, setPreviewProfile] = useState<typeof profiles[0] | null>(null);
  
  const filteredDomains = selectedDomain 
    ? domains.filter(d => d.id === selectedDomain)
    : domains;

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          My Digital Presence
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Connect with me across various platforms and explore my work
        </p>
      </div>

      {/* Domain Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedDomain(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !selectedDomain
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
          }`}
        >
          All Platforms
        </button>
        {domains.map((domain) => (
          <button
            key={domain.id}
            onClick={() => setSelectedDomain(domain.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedDomain === domain.id
                ? `bg-gradient-to-r ${domain.color} text-white shadow-lg`
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {domain.name}
          </button>
        ))}
      </div>

      {/* Domain Sections */}
      <div className="space-y-16">
        {filteredDomains.map((domain) => {
          const domainProfiles = profiles.filter(p => p.domain === domain.id);
          if (domainProfiles.length === 0) return null;
          
          return (
            <div key={domain.id} className="space-y-6">
              <div className="flex items-center mb-2">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${domain.color} mr-4`}></div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {domain.name}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domainProfiles.map((profile) => (
                  <motion.a
                    key={`${domain.id}-${profile.name}`}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -4 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setPreviewProfile(profile);
                    }}
                  >
                    <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-300 mr-3`}>
                            {iconMap[profile.icon] || <LinkIcon className="w-5 h-5" />}
                          </div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {profile.name}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {profile.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Profile Preview Modal */}
      <AnimatePresence>
        {previewProfile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewProfile(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setPreviewProfile(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-300 mr-4">
                  {iconMap[previewProfile.icon] || <LinkIcon className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{previewProfile.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {previewProfile.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {previewProfile.description}
              </p>
              
              <div className="flex justify-end">
                <a
                  href={previewProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
